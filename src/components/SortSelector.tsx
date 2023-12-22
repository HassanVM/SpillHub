import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SortSelector = () => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Dato lagt til' },
    { value: 'name', label: 'Navn' },
    { value: '-released', label: 'Utgivelsesdato' },
    { value: '-metacritic', label: 'Popularitet' },
    { value: '-rating', label: 'Gjennomsnittlig rangering' }, 
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore(
    (s) => s.gameQuery.sortOrder
  );
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sorter etter: {currentSortOrder?.label || 'Relevans'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
