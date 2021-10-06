import * as C from './style';

type Props = {
  title: string;
  value: number;
  color?: string;
}

export const ResumeItem = ({title, value, color}: Props) => {
  return(
    <div>
      <C.Container>
        <C.Title>{title}</C.Title>
        <C.Value color={color}>R$ {value}</C.Value>
      </C.Container>
    </div>
  );
}