import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface Props {
  text: string;
  block?: boolean;
  height?: number;
  type?: 'primary' | 'secondary' | 'text';
  disabled?: boolean;
  onPress(): void;
}

const Button: FC<Props> = ({
  text,
  type = 'primary',
  disabled = false,
  block = false,
  height = null,
  onPress,
}) => {
  const currentStyles = styles(block, disabled, type, height);
  return (
    <TouchableOpacity
      disabled={disabled}
      accessibilityLabel={text}
      onPress={onPress}
      style={currentStyles.button}>
      <Text style={currentStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;