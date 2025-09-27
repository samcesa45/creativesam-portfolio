import React from 'react';
import DrawerLayout from '../drawer-layout';
import Intro from '../intro';
import { Props } from '@/constants';

export default function DrawerIntro({ setIsOpen, isOpen }: Props) {
  return (
    <DrawerLayout isOpen={isOpen} setIsOpen={setIsOpen}>
      <Intro isOpen={isOpen} setIsOpen={setIsOpen} />
    </DrawerLayout>
  );
}
