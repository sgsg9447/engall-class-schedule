import React from 'react';
import styled from 'styled-components';

type Props = {};

const ScheduleBox = (props: Props) => {
  return (
    <ScheduleBoxContainer>
      {/* 하드코딩 된 시간 자리는 부모 컴포넌트로부터 전달 받은 {props} 자리 */}
      <ScheduleText>10:00 AM - 10:40 AM</ScheduleText>
      <CancelButton src='./images/cancel.png' />
    </ScheduleBoxContainer>
  );
};

export default ScheduleBox;

const ScheduleBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px;
  gap: 7px;
  width: 133px;
  height: 53px;
  left: 20px;
  top: 18px;
  background-color: #efefef;
  border-radius: 8px;
`;

const ScheduleText = styled.div`
  width: 100px;
  height: 44.62px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  color: #747474;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const CancelButton = styled.img`
  width: 24px;
  height: 24px;
  flex: none;
  order: 1;
  flex-grow: 0;
  cursor: pointer;
`;