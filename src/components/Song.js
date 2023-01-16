import React from "react";
import { useForm } from "react-hook-form";

export default function Song(props) {
  const { register, handleSubmit, errors } = useForm();

  return (
    <div class="inline-flex p-8">
      <label
        for="title"
        class="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
      >
        <input
          type="input"
          id="title"
          placeholder="Title"
          class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span class="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          Title
        </span>
      </label>
      <label
        for="artist"
        class="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
      >
        <input
          type="input"
          id="artist"
          placeholder="Artist"
          class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span class="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          Artist
        </span>
      </label>
      <label
        for="bpm"
        class="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
      >
        <input
          type="input"
          id="bpm"
          placeholder="BPM"
          class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span class="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          BPM
        </span>
      </label>

      {/* <input
        {...register("title", {
          required: true,
        })}
        placeholder="Title"
      /> */}
      {/* <input {...register("artist")} placeholder="Artist" /> */}
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
      {/* <input type="number" {...register("bpm")} placeholder="BPM" /> */}
    </div>
  );
}
