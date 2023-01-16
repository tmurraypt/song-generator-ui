import React from "react";
import { useForm } from "react-hook-form";
import Chord from "./Chord";
import { DeleteButton } from "./DeleteButton";
import { alphabet } from "./Utils/Alphabet";

export default function Section(props) {
  const { register, handleSubmit, errors } = useForm();

  const decreaseChords = (sectionIndex, chordIndex, section) => {
    console.log("sectionIndex: " + sectionIndex);
    console.log("chordIndex: " + chordIndex);
    if (props.sections[sectionIndex].chords.length <= 0) {
      return;
    } else {
      props.setSections((prevSections) => {
        console.log(prevSections[sectionIndex].chords);
        prevSections[sectionIndex].chords.splice(chordIndex, 1);
        console.log(prevSections[sectionIndex].chords);
        return [...prevSections];
      });
      console.log(section);
    }
  };

  // const addRemoveButton = () => {
  //   if (props.chords > 0) {
  //     return <div onClick={props.decreaseChords}>- Remove</div>;
  //   }
  // };

  return (
    <div>
      <div class="inline-flex p-2">
        <label
          for="sectionLetter"
          className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
        >
          <input
            type="text"
            id="sectionLetter"
            placeholder="Section Letter"
            class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            maxLength={1}
            value={alphabet[props.sectionIndex]}
          />

          <span class="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Section Letter
          </span>
        </label>
        <DeleteButton
          decrease={() => props.decreaseSections(props.sectionIndex)}
        />
      </div>
      <br />

      <br />
      {/* Generate Chords */}
      <div class="inline-flex flex-col">
        {/* {props.chords.map((_, i) => {
          return (
            <Chord
              key={Math.random()}
              section={props.section}
              index={i}
              sectionIndex={props.sectionIndex}
              decreaseChords={decreaseChords}
            />
          );
        })} */}
        {() => {
          props.generateChords(props.sectionIndex);
        }}
        <a
          onClick={() => props.increaseChords(props.sectionIndex)}
          class="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition p-3"
        >
          + Add Chord
        </a>
      </div>
    </div>
  );
}
