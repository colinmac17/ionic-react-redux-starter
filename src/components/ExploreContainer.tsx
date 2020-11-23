import React, { useState } from "react";
import "./ExploreContainer.css";
import { IonButton, IonContent, IonInput, IonLabel } from "@ionic/react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTabOneTitle,
  changeTabOneTitle,
  changeTabTwoTitle,
  changeTabThreeTitle,
  changeTabTitleAsync,
} from "../features/tabs/tabSlice";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const globalTitle = useSelector(selectTabOneTitle);
  const [text, setText] = useState<string>(globalTitle);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <strong>{text}</strong>
      <p>
        Explore{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
          className="link"
        >
          UI Components
        </a>
      </p>
      <IonLabel position="stacked">Set Text</IonLabel>
      <IonInput
        value={text}
        color="dark"
        placeholder="enter new text"
        onIonChange={(e) => {
          setText(e.detail.value!);
          dispatch(changeTabOneTitle(e.detail.value!));
          dispatch(changeTabTwoTitle(e.detail.value!));
          dispatch(changeTabThreeTitle(e.detail.value!));
        }}
      />
      <IonButton
        color="primary"
        onClick={(e) => {
          dispatch(changeTabTitleAsync(text!.toUpperCase()));
        }}
      >
        Make Title Uppercase
      </IonButton>
    </div>
  );
};

export default ExploreContainer;
