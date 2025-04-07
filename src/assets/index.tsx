import star from './star.svg';
import Star from './star.svg?react';

import wave from './wave.svg';
import Wave from './wave.svg?react';

import stripes1 from './stripes1.svg';
import Stripes1 from './stripes1.svg?react';

import stripes2 from './stripes2.svg';
import Stripes2 from './stripes2.svg?react';

import stripes3 from './stripes3.svg';
import Stripes3 from './stripes3.svg?react';

import { BackgroundItem } from '../types';


const backgrounds: BackgroundItem[] = [{
    id: 1,
    image: star,
    svg: Star,
    name: "Star"
  },
{
    id: 2,
    image: wave,
    svg: Wave,
    name: "Wave"
},
{
  id: 3,
  image: stripes1,
  svg: Stripes1,
  name: "Stripes1"
},
{
  id: 4,
  image: stripes2,
  svg: Stripes2,
  name: "Stripes2"
},
{
  id: 5,
  image: stripes3,
  svg: Stripes3,
  name: "Stripes3"
},
];

export {
    backgrounds
  };