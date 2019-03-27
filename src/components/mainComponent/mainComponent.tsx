import * as React from "react";
import "./styles.scss";
import {Users} from "../../api/dto/Users.g";

interface IProps {
  users: Users[];
}

export class MainComponent extends React.Component<IProps> {
  public render(): JSX.Element {
    const {users} = this.props;

    return (
      <>
        {users && users.map((item) => (<div key={item.id}>{item.name}</div>))}
      </>
    );
  }
}
