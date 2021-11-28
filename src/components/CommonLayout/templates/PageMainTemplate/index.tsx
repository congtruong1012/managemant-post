import React, { ReactNode } from 'react';
import Section from '../../molecules/Section';
import { Card, Typography, CardContent } from '@mui/material';

interface Props {
  title: string;
  children: ReactNode;
}

function PageMainTemplate(props: Props) {
  const { title, children } = props;
  console.log('Array.isArray(children)', Array.isArray(children));

  return (
    <Section>
      <Card elevation={0}>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
        </CardContent>
      </Card>
      {Array.isArray(children) ? (
        <Section>
          {children.map((item, index) => (
            <Card elevation={0} key={String(index)}>
              <CardContent>{item}</CardContent>
            </Card>
          ))}
        </Section>
      ) : (
        <Card elevation={0}>
          <CardContent>{children}</CardContent>
        </Card>
      )}
    </Section>
  );
}

export default PageMainTemplate;
