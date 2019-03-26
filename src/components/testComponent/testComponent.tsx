import * as React from "react";
import "./styles.scss";

export class TestComponent extends React.Component {
  public render(): JSX.Element {
    return (
      <>
        <p className={"container"}>Test Component</p>
      </>
    );
  }
}
