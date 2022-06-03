export default function Root(props) {
  return (
    <div>
      <h1>welcome home!</h1>
      <section>{props.name} is mounted!</section>
    </div>
  );
}
