import React, { FC } from 'react';

interface SoundProps {
  id: string;
}

export const Sound: FC<SoundProps> = ({ id }) => (
  <audio id={id}>
    <source
      src={`${process.env.PUBLIC_URL}/audio/${id}.mp3`}
      type="audio/mp3"
    ></source>
  </audio>
);
