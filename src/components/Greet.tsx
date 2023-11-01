type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      ini merupakan components {props.name} sebanyak {props.messageCount} apakah
      sudah login {props.isLoggedIn}
    </div>
  );
};

export default Greet;
