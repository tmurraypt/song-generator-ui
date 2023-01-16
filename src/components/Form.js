import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Section from "./Section";
import Song from "./Song";
import Chord from "./Chord";

export default function Form(props) {
  const { register, handleSubmit, errors } = useForm();
  const [sections, setSections] = useState([{ chords: [1, 2, 3, 4] }]);

  const increaseSections = () => {
    setSections((prevSection) => [...prevSection, { chords: [1, 2, 3, 4] }]);
  };

  const decreaseSections = (i) => {
    console.log("Start");
    if (sections.length <= 0) {
      setSections([]);
    } else {
      setSections((prevSection) => {
        if (i >= 0) {
          console.log(i);
          prevSection.splice(i, 1);
          console.log("section length: " + prevSection.length);
          console.log("LOOK HERE: " + JSON.stringify([...prevSection]));
          return [...prevSection];
        }
        console.log("End");
        return prevSection;
      });
    }
  };

  const resetSections = () => {
    setSections({ A: 4 });
  };

  const increaseChords = (i) => {
    console.log("Chords:" + i);
    setSections((prevSections) => {
      prevSections[i].chords.push(1);
      console.log(prevSections);
      return [...prevSections];
    });
  };

  const showSubmit = () => {
    if (sections.length > 0) {
      return (
        <a
          class="inline-block rounded bg-indigo-600 px-4 py-3 text-sm font-medium text-white transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 m-3"
          type="submit"
        >
          Submit
        </a>
      );
    }
  };

  const generateChords = (j) => {
    sections[j].chords.map((_, i) => {
      return (
        <Chord
          key={Math.random()}
          section={props.section}
          index={i}
          sectionIndex={props.sectionIndex}
          // decreaseChords={decreaseChords}
        />
      );
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Song />
      {/* <div>+ Add Section</div> */}
      <a
        onClick={increaseSections}
        class="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100"
      >
        + Add Section
      </a>
      {sections.map((_, i) => (
        <Section
          key={Math.random()}
          sectionIndex={i}
          chords={sections[i].chords}
          increaseChords={increaseChords}
          decreaseSections={decreaseSections}
          setSections={setSections}
          sections={sections}
          generateChords = {generateChords}
        />
      ))}
      {showSubmit()}
    </form>
  );
}

function onSubmit(data) {
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    title: data.title,
    artist: data.artist,
    key: data.key,
    bpm: data.bpm,
    progression: [
      {
        sectionLetter: data.sectionLetter,
        chordList: [
          {
            chordNumber: data.chordNumber,
            chordQuality: data.chordQuality,
            chordExtension: data.chordExtension,
            additionalInfo: data.additionalInfo,
          },
        ],
      },
    ],
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  console.log(raw);

  // fetch("http://localhost:8081/api/demo/song", requestOptions)
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log("error", error));
}
//sections.chords[i];
