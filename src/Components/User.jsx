import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);

    //state variables
    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'default',
      },
    };
    console.log(`3. ${this.props.child} Child's constructors`);
  } //constructor

  async componentDidMount() {
    //called after every first render
    console.log(`5. ${this.props.child} Child's did mount.`);

    //api call
    const data = await fetch('https://api.github.com/users/romeshyadav002');
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  } //componentDidMount

  componentDidUpdate() {
    //called after every render
    console.log(`7. ${this.props.child} Child's did update.`);
  } //componentDidUpdate

  componentWillUnmount() {
    //called when we're leaving the component
    console.log(`9. ${this.props.child} Child's will unmount.`);
  } //componentWillUnmount

  render() {
    console.log(`4. ${this.props.child} Child's render`);
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <section className="w-64 bg-slate-200 text-slate-700 m-4 p-2">
        <img src={avatar_url} className="rounded p-4" />
        <h2 className="p-4 text-slate-500 font-bold">{name}</h2>
        <h3 clasName="p-4">{location}</h3>
      </section>
    );
  }
}

export default User;
