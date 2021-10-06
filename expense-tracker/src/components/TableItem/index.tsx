import { Item } from "../../Types/Item";
import { formatDate } from "../../helpers/dateFilter";
import { category } from "../../data/categorias";
import * as C from "./style";

type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={category[item.category].color}>
          {category[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn >
        <C.Values color={category[item.category].expense ? 'red' : 'green'}>
         R$ {item.value}
        </C.Values>
        </C.TableColumn>
    </C.TableLine>
  );
};
