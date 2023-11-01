type PersonLIstProps = {
  names: {
    first: string;
    last: string;
  }[];

  names2: string[];
};

export const PersonList = (props: PersonLIstProps) => {
  console.log(props.names2);
  return (
    <div>
      <div>
        {props.names.map((item) => {
          return (
            <div>
              {item.first} {item.last}
            </div>
          );
        })}
      </div>
      <div>
        {props.names2.map((item) => {
          return (
            <div>
              {item} 
            </div>
          );
        })}
      </div>
    </div>
  );
};
