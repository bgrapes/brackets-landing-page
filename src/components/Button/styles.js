import styled from 'styled-components'

const handleButtonStyles = (type) => {
  switch (type) {
    case 'secondary':
      return 'background-color: #767d84;'
    case 'textOnly':
      return 'background-color: transparent; color: #f65928; padding-left: 0;'
    default:
      return 'background-color: #2885f6;'
  }
}

export const Wrapper = styled.button`
  color: #fff;
  border-radius: 3px;
  font-family: inherit;
  font-weight: 700;
  font-size: 14.4px;
  height: 40px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  width: inherit;
  align-self: flex-start;
  margin-right: 20px;

  ${({ type }) => handleButtonStyles(type)};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
    @keyframes bounce {
      0%,
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }

      50% {
        -webkit-transform: translateY(-3px);
        transform: translateY(-3px);
      }
    }
    animation: ${({ type }) => type !== 'textOnly' && 'bounce 0.5s'};
  }
`

export const ArrowIcon = styled.img`
  margin: 2px 0 0 10px;
`
