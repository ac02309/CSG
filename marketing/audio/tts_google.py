"""Voiceover with Google Cloud Text-to-Speech (Chirp 3 HD British voices), the most human voices
reachable from a cloud session. Reads the API key from the GOOGLE_TTS_API_KEY environment variable
(set it in the environment's settings; never paste a key into chat or commit it).

  python3 marketing/audio/tts_google.py samples          # one line in several British voices -> marketing/audio/samples/
  python3 marketing/audio/tts_google.py read <Voice>     # the full explainer read, one WAV per line -> marketing/audio/read-<Voice>/

The lines come from marketing/audio/explainer-script.json (the same 26 lines as the "Video and voice"
tab of the Go-to-Market Kit). The film is then re-timed to the read, as for a human recording.
"""
import base64, json, os, sys, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
KEY = os.environ.get('GOOGLE_TTS_API_KEY')
URL = 'https://texttospeech.googleapis.com/v1/text:synthesize?key='
# British-English Chirp 3 HD voices worth auditioning (male first)
VOICES = ['Charon', 'Orus', 'Fenrir', 'Iapetus', 'Algenib', 'Puck', 'Kore', 'Aoede', 'Leda']
SAMPLE = "Monday morning. Your best people are copying numbers from one system into another. Again. We're Clarke Systems Group, and we build the systems that do that work for you."

def say(text, voice, path, rate=1.0):
    body = {'input': {'text': text},
            'voice': {'languageCode': 'en-GB', 'name': f'en-GB-Chirp3-HD-{voice}'},
            'audioConfig': {'audioEncoding': 'LINEAR16', 'sampleRateHertz': 48000, 'speakingRate': rate}}
    req = urllib.request.Request(URL + KEY, data=json.dumps(body).encode(), headers={'Content-Type': 'application/json'})
    with urllib.request.urlopen(req, timeout=60) as r:
        audio = base64.b64decode(json.load(r)['audioContent'])
    with open(path, 'wb') as f:
        f.write(audio)

if __name__ == '__main__':
    if not KEY:
        sys.exit('Set GOOGLE_TTS_API_KEY in the environment settings first (see the docstring).')
    mode = sys.argv[1] if len(sys.argv) > 1 else 'samples'
    if mode == 'samples':
        out = os.path.join(HERE, 'samples'); os.makedirs(out, exist_ok=True)
        for v in VOICES:
            try:
                say(SAMPLE, v, os.path.join(out, f'{v}.wav')); print('ok', v)
            except Exception as e:
                print('failed', v, e)
    elif mode == 'read':
        voice = sys.argv[2]
        script = json.load(open(os.path.join(HERE, 'explainer-script.json')))
        out = os.path.join(HERE, f'read-{voice}'); os.makedirs(out, exist_ok=True)
        for sc in script['scenes']:
            for i, line in enumerate(sc['lines']):
                say(line, voice, os.path.join(out, f"{sc['id']}-{i}.wav")); print('ok', sc['id'], i)
