import React from "react";

interface SoundProps {
  id: string;
}

export const Sound = ({ id }: SoundProps): JSX.Element => {
  return (
    <audio id={id}>
      <source src={`${process.env.PUBLIC_URL}/audio/${id}.mp3`} type="audio/mp3"></source>
    </audio>
  );
};
