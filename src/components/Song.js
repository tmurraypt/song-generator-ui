import React from "react";
import { useForm } from "react-hook-form";

export default function Song(props) {
  const { register, handleSubmit, errors } = useForm();

  return (
    <div>
      <input
        {...register("title", {
          required: true,
        })}
        placeholder="Title"
      />
      <input {...register("artist")} placeholder="Artist" />
      <select {...register("key")}>
        <option value="">Key</option>
        <option value="Ab">Ab</option>
        <option value="A">A</option>
        <option value="Bb">Bb</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="Db">Db</option>
        <option value="D">D</option>
        <option value="Eb">Eb</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="Gb">Gb</option>
        <option value="G">G</option>
      </select>
      <input type="number" {...register("bpm")} placeholder="BPM" />
    </div>
  );
}
