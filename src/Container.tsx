import { useEffect } from "react";
import { useState } from "react";
import { FunctionComponent, ReactElement } from "react";

const Add: Function = (a: number = 3, b: number): number => {
  return a + b;
};

// type, interface
interface ContainerProps {
  name: string;
  count?: number;
}

interface DumpOriginType {
  isOriginDump?: number;
}

// 인터페이스는 상속이 가능하다.
interface DumpType extends DumpOriginType {
  isDump: boolean;
}

// 타입 합성
// type ObjectType = ContainerProps & DumpType;

// Union type(OR)
type ObjectType = ContainerProps | DumpType;

const Container: FunctionComponent<ContainerProps> = (props): ReactElement => {
  const { children, name, count } = props;

  const [value, setValue] = useState<number>(0);
  const [object, setObject] = useState<ObjectType>();

  useEffect(() => {
    setValue(Add(count, 3));
    setObject({ name, count });
  }, []);

  return (
    <div>
      <div>{name}</div>
      <div>{value}</div>
      {children}
    </div>
  );
};

export default Container;
