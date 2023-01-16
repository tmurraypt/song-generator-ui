import React from "react";
import { useForm } from "react-hook-form";
import { DeleteButton } from "./DeleteButton";

export default function Chord(props) {
  const { register, handleSubmit, errors } = useForm();

  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    // Check if they hit the max character length
    if (value.length >= maxLength) {
      // Check if it's not the last input field
      if (parseInt(fieldIndex, 10) < 1) {
        // Get the next input field
        const nextSibling = document.querySelector(
          "#root > div > form > div:nth-child(3) > div.inline-flex.flex-col > div:nth-child(1) > select"
        );

        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
    }
  };

  return (
    <div class="inline-flex">
      <label
        for="chordNumber"
        className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
      >
        <input
          type="text"
          id="chordNumber"
          placeholder="Chord Number"
          class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          maxLength={1}
          onChange={handleChange}
        />

        <span class="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          Chord Number
        </span>
      </label>
      <select {...register("chordQuality")}>
        <option value="">Select...</option>
        <option value="MAJOR">Major</option>
        <option value="MINOR">Minor</option>
        <option value="DIM">Diminished</option>
        <option value="AUG">Augmented</option>
      </select>
      <label
        for="chordExtension"
        class="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
      >
        <input
          type="input"
          id="chordExtension"
          placeholder="Chord Extension"
          class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span class="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          Chord Extension
        </span>
      </label>
      <label
        for="additionalInfo"
        class="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
      >
        <input
          type="input"
          id="additionalInfo"
          placeholder="additionalInfo"
          class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span class="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          Additional Info
        </span>
      </label>
      <DeleteButton
        decrease={() =>
          props.decreaseChords(props.sectionIndex, props.index, props.section)
        }
      />
    </div>
  );
}
