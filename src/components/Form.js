import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Section from "./Section";
import Song from "./Song";

export default function Form(props) {
  const { register, handleSubmit, errors } = useForm();
  const [chords, setChords] = useState(4);
  const [sections, setSections] = useState([{ chords: 4 }, { chords: 2 }]);

  //increase counter
  const increaseSections = () => {
    setSections((prevSection) => [...prevSection, { chords: 4 }]);
  };

  //decrease counter
  const decreaseSections = (i) => {
    console.log("Start");
    if (sections.length <= 0) {
      setSections([]);
    } else {
      setSections((prevSection) => {
        if (i > -1) {
          console.log(i);
          prevSection.splice(i, 1);
          console.log("section length: " + prevSection.length);
          return [...prevSection];
        }
        console.log("End");
        return prevSection;
      });
    }
  };

  //reset counter
  const resetSections = () => {
    setSections({ A: 4 });
  };

  //increase counter
  const increaseChords = (i) => {
    console.log("Chords:" + i);
    setSections((prevSections) => {
      prevSections[i].chords += 1;
      console.log(prevSections);
      return [...prevSections];
    });
  };

  //decrease counter

  //reset counter
  // const resetChords = () => {
  //   setChords(0);
  // };

  // const showRemoveButton = () => {
  //   if (sections.length > 0) {
  //     return <div onClick={decreaseSections}>- Remove</div>;
  //   }
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Song />
      <div onClick={increaseSections}>+ Add Section</div>
      {/* <div onClick={decreaseSections}>- Remove</div> */}
      {sections.map((_, i) => (
        <Section
          key={i}
          index={i}
          chords={sections[i].chords}
          increaseChords={increaseChords}
          // decreaseChords={decreaseChords}
          decreaseSections={decreaseSections}
          setSections={setSections}
          sections={sections}
        />
      ))}
      <input type="submit" />
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
