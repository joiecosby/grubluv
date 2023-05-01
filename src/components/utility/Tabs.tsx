import React, { ReactElement, useState } from 'react';
import TabTitle from './TabTitle';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
  children: ReactElement[];
};
const primaryColor = `purple`;
const WrapperDiv = styled('div')`
  font-family: 'sans-serif';
  text-align: center;
`;

const controlOpen = css`
  background-color: black;
`;
const controlClose = css`
  display: none;
`;

const GreedyListWrapper = css`
  height: 2.25em;
  overflow: hidden;
  padding-right: 3.5em;
  box-sizing: border-box;

  &:target {
    height: auto;

    .${controlOpen} {
      display: none;
    }

    .${controlClose} {
      display: block;
    }
  }
`;

const TrunkList = styled('ul')`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  position: relative;
`;

const TrunkListLi = styled('li')`
  margin: 0;
  padding: 0;
  flex: 1 0 auto;
`;
const TrunkListItem = styled('a')`
  display: block;
  padding: 0.5em;
  text-align: center;
  white-space: nowrap;

  color: #fff;
  background: ${primaryColor};

  &:hover,
  &:active,
  &:focus {
    opacity: 0.5;
  }
`;

const ListControls = styled(TrunkListLi)`
  position: absolute;
  top: 0;
  right: -3.5em;
  width: 3.5em;

  height: calc((2.25em - 100%) * -1000);
  max-height: 2.25em;

  overflow: hidden;

  a {
    text-decoration: none;
  }

  span {
    font-size: 0.75em;
    font-style: italic;
  }
`;
const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  console.log('children:', children);
  console.log('selectedTab:', selectedTab);

  return (
    // <WrapperDiv>
    //   <div css={GreedyListWrapper} id="GreedyList">
    //     <div css={TrunkList}>
    //       <div css={TrunkListLi}>
    //         <div css={TrunkListItem}>
    //           {children.map((item, index) => (
    //             <TabTitle key={index} title={item.props.title} index={index} setSelectedTab={setSelectedTab} />
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //     {children[selectedTab]}
    //   </div>
    // </WrapperDiv>

    <WrapperDiv>
      <h2>Resize this frame to see the truncating effect. {'\u2728'}</h2>
      {/* <div className={GreedyListWrapper} id="GreedyList"> */}
      <div>
        <TrunkList>
          <TrunkList>
            <TrunkListItem>
              {children.map((item, index) => (
                <TabTitle key={index} title={item.props.title} index={index} setSelectedTab={setSelectedTab} />
              ))}
            </TrunkListItem>
          </TrunkList>
        </TrunkList>
        {children[selectedTab]}
      </div>
    </WrapperDiv>

    // <WrapperDiv>
    //   <h2>Resize this frame to see the truncating effect. {'\u2728'}</h2>

    //   {/* <div className={GreedyListWrapper} id="GreedyList"> */}
    //   <div>
    //     <TrunkList>
    //       <TrunkListLi>
    //         <TrunkListItem href="#">A link</TrunkListItem>
    //       </TrunkListLi>

    //       <TrunkListLi>
    //         <TrunkListItem href="#">Somewhere</TrunkListItem>
    //       </TrunkListLi>

    //       <TrunkListLi>
    //         <TrunkListItem href="#">A bit longer</TrunkListItem>
    //       </TrunkListLi>

    //       <TrunkListLi>
    //         <TrunkListItem href="#">Another one</TrunkListItem>
    //       </TrunkListLi>

    //       <TrunkListLi>
    //         <TrunkListItem href="#">Yet another</TrunkListItem>
    //       </TrunkListLi>

    //       <TrunkListLi>
    //         <TrunkListItem href="#">Again</TrunkListItem>
    //       </TrunkListLi>

    //       <TrunkListLi>
    //         <TrunkListItem href="#">Last One</TrunkListItem>
    //       </TrunkListLi>

    //       {/* <ListControls className={controlOpen}>
    //         <TrunkListItem href="#GreedyList">
    //           <span>more</span>
    //         </TrunkListItem>
    //       </ListControls>

    //       <ListControls className={controlClose}>
    //         <TrunkListItem href="#">
    //           <span>less</span>
    //         </TrunkListItem>
    //       </ListControls> */}
    //     </TrunkList>
    //   </div>
    // </WrapperDiv>
  );
};

export default Tabs;
