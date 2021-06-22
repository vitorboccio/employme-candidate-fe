import styled from 'styled-components';
import { colors } from '../../styles/theme';

const StyledCard = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid ${colors.gray.default};
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    color: ${colors.blue.default};
    border-color: ${colors.blue.default};
  }
`;

export default StyledCard;