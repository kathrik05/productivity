import React from 'react';
import calendarIcon from '@/assets/icons/calendar.svg';
import clockIcon from '@/assets/icons/clock.svg';
import infoIcon from '@/assets/icons/info.svg';
import uncheckedIcon from '@/assets/icons/unchecked.svg';
import checkedIcon from '@/assets/icons/checked.svg';
import addDarkIcon from '@/assets/icons/add-dark.svg';
import addAccentIcon from '@/assets/icons/add-accent.svg';
import chevronDownIcon from '@/assets/icons/chevron-down.svg';
import logoMarkIcon from '@/assets/icons/logo-mark.svg';

/**
 * Pixel-perfect match of Figma node 80:5443 ("Design Foundation")
 * Canvas size: 2290 x 986 on bg-canvas (#D6D6D6)
 */
export const DesignFoundationPage: React.FC = () => {
  return (
    <div
      className="bg-canvas relative w-[2290px] h-[986px] overflow-hidden select-none"
      data-node-id="80:5443"
      data-name="Design Foundation"
    >
      {/* Typography Styles List */}
      <div
        className="absolute flex flex-col items-start left-[138.24px] text-secondary top-[184.78px] w-[282.341px]"
        data-node-id="80:5455"
      >
        <div className="flex flex-col font-sans text-focus font-normal h-[67.873px] justify-center relative shrink-0 w-full">
          <p className="leading-[normal]">Focus</p>
        </div>
        <div className="flex flex-col font-sans text-title font-bold h-[67.873px] justify-center relative shrink-0 w-full">
          <p className="leading-[normal]">Title</p>
        </div>
        <div className="flex flex-col font-sans text-bodytitle font-semibold h-[67.873px] justify-center relative shrink-0 w-full">
          <p className="leading-[normal]">bodytitle</p>
        </div>
        <div className="flex flex-col font-sans text-text1 font-medium h-[67.873px] justify-center relative shrink-0 w-full">
          <p className="leading-[normal]">text</p>
        </div>
        <div className="flex flex-col font-sans text-label font-semibold h-[67.873px] justify-center relative shrink-0 w-full">
          <p className="leading-[normal]">label</p>
        </div>
        <div className="flex flex-col font-sans text-label2 font-medium h-[67.873px] justify-center relative shrink-0 w-full">
          <p className="leading-[normal]">label2</p>
        </div>
        <div className="flex flex-col font-sans text-caption font-medium h-[67.873px] justify-center relative shrink-0 w-full">
          <p className="leading-[normal]">caption</p>
        </div>
        <div className="flex flex-col font-sans text-input font-medium h-[67.873px] justify-center relative shrink-0 w-full">
          <p className="leading-[normal]">input</p>
        </div>
        <div className="flex flex-col font-sans text-button font-semibold h-[67.873px] justify-center relative shrink-0 w-full">
          <p className="leading-[normal]">button</p>
        </div>
      </div>

      {/* Section Headings */}
      <div className="-translate-y-1/2 absolute flex flex-col font-sans font-bold h-[80px] justify-center left-[138.24px] text-[64px] text-secondary top-[132.78px] w-[384.585px]">
        <p className="leading-[normal]">Typography</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-sans font-bold h-[80px] justify-center left-[824.93px] text-[64px] text-secondary top-[132.78px] w-[425.789px]">
        <p className="leading-[normal]">Color Pallete</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-sans font-bold h-[80px] justify-center left-[1772.2px] text-[64px] text-secondary top-[146.78px] w-[425.789px]">
        <p className="leading-[normal]">Icons</p>
      </div>

      {/* Color Swatches */}
      <div className="absolute flex gap-2.5 items-start left-[824.93px] top-[193.69px]">
        <div className="bg-accent h-[98px] rounded-sm shrink-0 w-[160px]" />
        <div className="bg-accent-light h-[98px] rounded-sm shrink-0 w-[160px]" />
      </div>

      <div className="absolute flex gap-2.5 items-start left-[825px] top-[311px] w-[330px]">
        <div className="bg-secondary flex-1 h-[98px] rounded-sm" />
        <div className="bg-secondary-light h-[98px] rounded-sm shrink-0 w-[160px]" />
      </div>

      <div className="absolute flex items-start left-[825px] top-[429.9px] w-[160px]">
        <div className="bg-primary flex-1 h-[98px] rounded-sm" />
      </div>

      <div className="absolute flex gap-2.5 items-start left-[825px] top-[548px] w-[330px]">
        <div className="bg-priority-high-text flex-1 h-[98px] rounded-sm" />
        <div className="bg-priority-medium-text flex-1 h-[98px] rounded-sm" />
        <div className="bg-priority-low-text flex-1 h-[98px] rounded-sm" />
      </div>

      {/* Icons */}
      <div className="absolute left-[1771.96px] size-[30px] top-[208.1px]">
        <img alt="Unchecked" className="block size-full" src={uncheckedIcon} />
      </div>
      <div className="absolute left-[1823.2px] size-[30px] top-[208.1px]">
        <img alt="Checked" className="block size-full" src={checkedIcon} />
      </div>
      <div className="absolute left-[1773.2px] size-[30px] top-[278.1px]">
        <img alt="Info" className="block size-full" src={infoIcon} />
      </div>
      <div className="absolute h-[31.875px] left-[1772.2px] top-[348.1px] w-[30px]">
        <img alt="Calendar" className="block size-full" src={calendarIcon} />
      </div>
      <div className="absolute left-[1771.21px] size-[30px] top-[419.97px]">
        <img alt="Clock" className="block size-full" src={clockIcon} />
      </div>
      <div className="absolute left-[1771.96px] size-[30px] top-[489.97px]">
        <img alt="Add" className="block size-full" src={addDarkIcon} />
      </div>
      <div className="absolute left-[1823px] size-[30px] top-[489.97px]">
        <img alt="Add accent" className="block size-full" src={addAccentIcon} />
      </div>
      <div className="absolute h-[21.273px] left-[1771.21px] top-[559.97px] w-[30px]">
        <img alt="Down" className="block size-full" src={chevronDownIcon} />
      </div>
      <div className="absolute left-[1761.96px] size-[50px] top-[621.85px]">
        <img alt="Brand mark" className="block size-full" src={logoMarkIcon} />
      </div>
    </div>
  );
};
