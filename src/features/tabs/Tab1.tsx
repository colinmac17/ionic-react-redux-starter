import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import { selectTabOneTitle } from "./tabSlice";
import ExploreContainer from "../../components/ExploreContainer";
import "./Tab1.css";
import { useSelector } from "react-redux";

const Tab1: React.FC = () => {
  const title = useSelector(selectTabOneTitle);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={title} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
