#!/usr/bin/env bash
# Puts a recorded voiceover on one of the films: cleans the voice, lowers the music while the
# voice speaks (and lifts it back between lines), and levels the result for social platforms.
#
# Usage: marketing/audio/mix_voice.sh <film.mp4> <music.m4a> <voice.(m4a|wav|mp3)> <out.mp4> [voice-start-seconds]
# Example: marketing/audio/mix_voice.sh marketing/video/silent/csg-film-square-1080.mp4 \
#            marketing/audio/music-social.m4a voice-square.m4a marketing/video/csg-film-square-1080-vo.mp4 0.3
set -euo pipefail
film=$1 music=$2 voice=$3 out=$4 delay=${5:-0}
ms=$(awk "BEGIN{print int($delay*1000)}")
ffmpeg -v error -y -i "$film" -i "$music" -i "$voice" -filter_complex "
  [2:a]aresample=48000,pan=stereo|c0=c0|c1=c0,adelay=${ms}|${ms},
       highpass=f=80,lowpass=f=14000,
       afftdn=nf=-25,
       equalizer=f=250:t=q:w=1.2:g=-2,equalizer=f=3500:t=q:w=1.5:g=2.5,
       acompressor=threshold=-20dB:ratio=3:attack=8:release=120:makeup=4dB,
       loudnorm=I=-17:TP=-2:LRA=7,asplit=2[vo][key];
  [1:a]aresample=48000,volume=-4dB[mus];
  [mus][key]sidechaincompress=threshold=0.03:ratio=8:attack=40:release=450:makeup=1[ducked];
  [ducked][vo]amix=inputs=2:duration=first:normalize=0,alimiter=limit=0.89,loudnorm=I=-16:TP=-1.5:LRA=11[a]" \
  -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart "$out"
echo "wrote $out"
