import React from "react";
import { useForm } from "react-hook-form";
import Chord from "./Chord";

export default function Section(props) {
  const { register, handleSubmit, errors } = useForm();
  const decreaseChords = (i) => {
    if (i > -1) {
      return;
    } else {
      props.setSections((prevSections) => {
        prevSections[i].chords -= 1;
        return [...prevSections];
      });
    }
  };

  // const addRemoveButton = () => {
  //   if (props.chords > 0) {
  //     return <div onClick={props.decreaseChords}>- Remove</div>;
  //   }
  // };

  return (
    <div>
      <div onClick={() => props.decreaseSections(props.index)}>- Remove</div>
      <input {...register("sectionLetter")} placeholder="Section Letter" />
      <div onClick={() => props.increaseChords(props.index)}>+ Add Chord</div>

      {[...Array(props.chords)].map((_, i) => {
        return (
          <Chord key={i} index={i} decreaseChords={decreaseChords} />
        );
      })}
    </div>
  );
}
