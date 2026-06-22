/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Frame } from '../types';

import crosslytTr3321 from '../assets/images/crosslyt_tr3321.jpg';
import crosslytCl91016 from '../assets/images/crosslyt_cl91016.jpg';
import crosslyt90657 from '../assets/images/crosslyt_90657.jpg';
import crosslytCl51031 from '../assets/images/crosslyt_cl51031.jpg';
import crosslytA2859 from '../assets/images/crosslyt_a2859.jpg';
import crosslytCl91016_145 from '../assets/images/crosslyt_cl91016_145.jpg';

export const FRAMES_DATA: Frame[] = [
  {
    id: 'crosslyt-tr3321',
    name: 'CrossLyt TR3321',
    description: 'Engineered from ultra-lightweight TR90 polymer, the TR3321 offers a bold matte black profile with flexible, comfortable fitment and high durability.',
    style: 'Full Rim',
    price: 1850,
    imageUrl: crosslytTr3321,
    material: 'TR90 Polymer & Acetate Temples',
    colors: ['Matte Black', 'Tortoise Black'],
    gender: 'Unisex',
    dimensions: '50-19-140'
  },
  {
    id: 'crosslyt-cl91016',
    name: 'CrossLyt CL91016',
    description: 'A sleek, modern rectangular silhouette finished in an elegant matte teal-blue. Features lightweight composite construction with spring-loaded hinges.',
    style: 'Full Rim',
    price: 2250,
    imageUrl: crosslytCl91016,
    material: 'Premium Composite & Metal Temples',
    colors: ['Matte Teal Blue', 'Slate Grey'],
    gender: 'Unisex',
    dimensions: '52-18-148'
  },
  {
    id: 'crosslyt-cl91016-145',
    name: 'CrossLyt CL91016 (Calibre 145)',
    description: 'A sleek rectangular composite frame in a refined teal-blue matte finish, paired with high-quality spring hinges and a shorter 145mm temple length.',
    style: 'Full Rim',
    price: 2200,
    imageUrl: crosslytCl91016_145,
    material: 'Premium Composite & Metal Temples',
    colors: ['Matte Teal Blue', 'Midnight Black'],
    gender: 'Unisex',
    dimensions: '52-18-145'
  },
  {
    id: 'crosslyt-90657',
    name: 'CrossLyt Aviator 90657',
    description: 'A classic double-bridge aviator updated for the modern era. Features an ultra-thin forest green metal frame accented by a triple-ridge gold-plated brow bar.',
    style: 'Full Rim',
    price: 2550,
    imageUrl: crosslyt90657,
    material: 'Gold-Plated Stainless Steel & Alloy',
    colors: ['Forest Green / Gold', 'Black / Silver'],
    gender: 'Unisex',
    dimensions: '53-16-142'
  },
  {
    id: 'crosslyt-cl51031',
    name: 'CrossLyt CL51031',
    description: 'Artisanal hand-crafted acetate frame displaying a beautiful gradient transition from deep ocean blue to warm amber brown. A striking, premium design.',
    style: 'Full Rim',
    price: 2450,
    imageUrl: crosslytCl51031,
    material: 'Handmade Italian Acetate',
    colors: ['Blue-Brown Gradient', 'Grey-Clear Gradient'],
    gender: 'Unisex',
    dimensions: '55-16-148'
  },
  {
    id: 'crosslyt-a2859',
    name: 'CrossLyt A2859',
    description: 'A polished, deep onyx black frame with a subtle, electric blue inner lining that catches the light. Perfect for an intellectual, modern look.',
    style: 'Full Rim',
    price: 1950,
    imageUrl: crosslytA2859,
    material: 'High-Density Gloss Acetate',
    colors: ['Glossy Black / Blue', 'Glossy Black / Clear'],
    gender: 'Unisex',
    dimensions: '55-19-143'
  }
];
