import React from "react";
import { useForm } from "react-hook-form";

export default function Chord(props) {
  const { register, handleSubmit, errors } = useForm();

  return (
    <div>
      <input {...register("chordNumber")} placeholder="Chord Number" />
      <select {...register("chordQuality")}>
        <option value="">Select...</option>
        <option value="MAJOR">Major</option>
        <option value="MINOR">Minor</option>
        <option value="DIM">Diminished</option>
        <option value="AUG">Augmented</option>
      </select>
      <input {...register("chordExtension")} placeholder="Chord Extension" />
      <input {...register("additionalInfo")} placeholder="Additional Info" />
      <div onClick={() => props.decreaseChords(props.section[props.index])}>
        x
      </div>
    </div>
  );
}
