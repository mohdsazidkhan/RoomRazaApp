import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text } from 'react-native';
import styles from './styles';

interface TopTabProps {
  data?: [];
  selectedTab?: string;
  onPress?: () => void;
}

export default function CustomTopBar(props: TopTabProps) {
  const { data = [], selectedTab, onPress } = props;

  const { t } = useTranslation();

  return (
    <Pressable style={styles.weekMonthView}>
      {data.map((item, index) => {
        return (
          <Text
            key={index}
            style={
              selectedTab == item
                ? styles.selectedTabText
                : styles.unSelectedText
            }
            onPress={() => onPress(item)}>
            {t(item)}
          </Text>
        );
      })}
    </Pressable>
  );
}