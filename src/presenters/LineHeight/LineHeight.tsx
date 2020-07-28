import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Text from '../../ui/Text/Text';

import { TokenDeclaration } from '../TokenDeclaration';

type LineHeightProps = TokenDeclaration;

const LineHeight: FC<LineHeightProps> = ({
  declaration,
  value,
}: LineHeightProps) => {
  return (
    <Card data-testid="lineHeight">
      <Text
        data-testid="LineHeightSample"
        lineHeight={value}
        isAlternative={true}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa dicta
        assumenda sed distinctio quae, quasi repudiandae nam nobis esse non
        excepturi!
      </Text>
      <Text>{declaration}</Text>
      <Text isAlternative={true}>{value}</Text>
    </Card>
  );
};

export default LineHeight;
