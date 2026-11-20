import React from 'react';
import {
  PriorityBadge,
  TaskTile,
  TaskFilterTab,
  ProgressBar,
  PopUpModal,
  TextInput,
  Button,
  DueToggle,
  PrioritySelector,
  TaskDetailsPanel,
} from '@/components/ui';
import type { PriorityLevel } from '@/lib/db';
import type { TaskScheduleVariant } from '@/components/ui/TaskTile';

const PRIORITIES: PriorityLevel[] = ['high', 'medium', 'low'];

const TASK_ROWS: {
  checked: boolean;
  scheduleType: TaskScheduleVariant;
  y: number;
}[] = [
  { checked: false, scheduleType: 'none', y: 104 },
  { checked: true, scheduleType: 'none', y: 187 },
  { checked: false, scheduleType: 'due_date', y: 270 },
  { checked: true, scheduleType: 'due_date', y: 373 },
  { checked: false, scheduleType: 'due_datetime', y: 476 },
  { checked: true, scheduleType: 'due_datetime', y: 579 },
  { checked: false, scheduleType: 'scheduled_date', y: 682 },
  { checked: true, scheduleType: 'scheduled_date', y: 784.9375 },
];

const COL_X = [21, 389, 757] as const;

/**
 * Pixel-perfect match of Figma node 80:5478 ("Components")
 * Canvas dimensions: 3001 x 1686
 */
export const DesignComponentsPage: React.FC = () => {
  return (
    <div
      className="bg-primary relative w-[3001px] h-[1686px] overflow-hidden"
      data-node-id="80:5478"
      data-name="Components"
    >
      {/* 1. taskTile Component Set (87:6349) */}
      <div
        className="absolute left-[49px] top-[129px] w-[1160px] h-[888.875px]"
        data-node-id="87:6349"
        data-name="taskTile"
      >
        {/* Row 0: Base unchecked & checked without priority */}
        <div className="absolute left-[21px] top-[21px]">
          <TaskTile checked={false} />
        </div>
        <div className="absolute left-[389px] top-[21px]">
          <TaskTile checked={true} />
        </div>

        {/* Rows 1..8: 3 priority columns x 8 states = 24 variants */}
        {TASK_ROWS.map((row, rowIdx) =>
          PRIORITIES.map((priority, colIdx) => (
            <div
              key={`${rowIdx}-${priority}`}
              style={{ left: `${COL_X[colIdx]}px`, top: `${row.y}px` }}
              className="absolute"
            >
              <TaskTile
                checked={row.checked}
                priority={priority}
                scheduleType={row.scheduleType}
              />
            </div>
          ))
        )}
      </div>

      {/* 2. Priority Badge Set (86:5909) */}
      <div
        className="absolute left-[1249px] top-[130px] w-[76px] h-[134px]"
        data-node-id="86:5909"
        data-name="Priority"
      >
        <div className="absolute left-[20px] top-[19.5px]">
          <PriorityBadge priority="high" />
        </div>
        <div className="absolute left-[12px] top-[58px]">
          <PriorityBadge priority="medium" />
        </div>
        <div className="absolute left-[20px] top-[96px]">
          <PriorityBadge priority="low" />
        </div>
      </div>

      {/* Rectangle 27 (98:9768) */}
      <div
        className="absolute left-[1246.26px] top-[285.88px] size-5 bg-[#D9D9D9]"
        data-node-id="98:9768"
      />

      {/* 3. Filter Tabs (88:7593 - Frame 29) */}
      <div
        className="absolute left-[1365px] top-[129px] w-[373px] h-[158px]"
        data-node-id="88:7593"
        data-name="Frame 29"
      >
        <div className="absolute left-[21px] top-[21px]">
          <TaskFilterTab filterType="all" active={true} />
        </div>
        <div className="absolute left-[136px] top-[21px]">
          <TaskFilterTab filterType="completed" active={true} />
        </div>
        <div className="absolute left-[251px] top-[21px]">
          <TaskFilterTab filterType="pending" active={true} />
        </div>

        <div className="absolute left-[21px] top-[88px]">
          <TaskFilterTab filterType="all" active={false} />
        </div>
        <div className="absolute left-[138px] top-[88px]">
          <TaskFilterTab filterType="completed" active={false} />
        </div>
        <div className="absolute left-[255px] top-[88px]">
          <TaskFilterTab filterType="pending" active={false} />
        </div>
      </div>

      {/* 4. listname Input Set (93:8544) */}
      <div
        className="absolute left-[1302px] top-[293px] w-[318px] h-[348.52px]"
        data-node-id="93:8544"
        data-name="listname"
      >
        <div className="absolute left-[21px] top-[21px]">
          <TextInput theme="dark" visualState="default" placeholder="list name" />
        </div>
        <div className="absolute left-[21px] top-[73.42px]">
          <TextInput theme="dark" visualState="active" defaultValue="|" />
        </div>
        <div className="absolute left-[21px] top-[125.84px]">
          <TextInput theme="dark" visualState="typed" defaultValue="John Doe" />
        </div>
        <div className="absolute left-[21px] top-[178.26px]">
          <TextInput theme="light" visualState="default" placeholder="list name" />
        </div>
        <div className="absolute left-[21px] top-[230.68px]">
          <TextInput theme="light" visualState="active" defaultValue="|" />
        </div>
        <div className="absolute left-[21px] top-[283.1px]">
          <TextInput theme="light" visualState="typed" defaultValue="typed" />
        </div>
      </div>

      {/* 5. Primary Save Button Set (94:8555) */}
      <div
        className="absolute left-[1246px] top-[669px] w-[192px] h-[144px]"
        data-node-id="94:8555"
        data-name="Save Primary"
      >
        <div className="absolute left-[20px] top-[20px]">
          <Button variant="primary" visualState="active">
            Primary
          </Button>
        </div>
        <div className="absolute left-[20px] top-[82px]">
          <Button variant="primary" visualState="hover">
            Primary
          </Button>
        </div>
      </div>

      {/* 6. Secondary Save Button Set (94:8560) */}
      <div
        className="absolute left-[1468px] top-[669px] w-[198px] h-[144px]"
        data-node-id="94:8560"
        data-name="Save Secondary"
      >
        <div className="absolute left-[20px] top-[20px]">
          <Button variant="secondary" visualState="active">
            Secondary
          </Button>
        </div>
        <div className="absolute left-[20px] top-[82px]">
          <Button variant="secondary" visualState="hover">
            Secondary
          </Button>
        </div>
      </div>

      {/* 7. Pop-up Component (94:8586) */}
      <div
        className="absolute left-[1246px] top-[840px]"
        data-node-id="94:8586"
        data-name="pop-up"
      >
        <PopUpModal />
      </div>

      {/* 8. Progress Component Set (93:8034) */}
      <div
        className="absolute left-[1797px] top-[109px] w-[390px] h-[296px]"
        data-node-id="93:8034"
        data-name="Progress"
      >
        <div className="absolute left-[20px] top-[20px]">
          <ProgressBar
            variant="Default"
            percentage={10}
            filledSegments={4}
            deltaText="+5% than yesterday"
          />
        </div>
        <div className="absolute left-[20px] top-[158px]">
          <ProgressBar
            variant="stacked"
            percentage={10}
            filledSegments={4}
            deltaText="+5% than yesterday"
          />
        </div>
      </div>

      {/* 9. Filter Due Toggle Set (95:9627) */}
      <div
        className="absolute left-[1779.74px] top-[453.95px] w-[350px] h-[179px]"
        data-node-id="95:9627"
        data-name="Filter"
      >
        <div className="absolute left-[20px] top-[20px]">
          <DueToggle value="no_due" />
        </div>
        <div className="absolute left-[20px] top-[73px]">
          <DueToggle value="due" />
        </div>
        <div className="absolute left-[20px] top-[126px]">
          <DueToggle value="scheduled" />
        </div>
      </div>

      {/* 10. Priority Selector Set (98:9718) */}
      <div
        className="absolute left-[2227px] top-[116px] w-[184px] h-[283px]"
        data-node-id="98:9718"
        data-name="Priority selector"
      >
        <div className="absolute left-[20px] top-[20px]">
          <PrioritySelector isOpen={false} />
        </div>
        <div className="absolute left-[20px] top-[72px]">
          <PrioritySelector isOpen={true} />
        </div>
      </div>

      {/* 11. Frame 39 Task Details Set (99:9853) */}
      <div
        className="absolute left-[2453px] top-[121.03px] w-[390px] h-[1108.26px]"
        data-node-id="99:9853"
        data-name="Frame 39"
      >
        <div className="absolute left-[21px] top-[21px]">
          <TaskDetailsPanel mode="no_due" />
        </div>
        <div className="absolute left-[21px] top-[335.42px]">
          <TaskDetailsPanel mode="due" />
        </div>
        <div className="absolute left-[21px] top-[703.84px]">
          <TaskDetailsPanel mode="scheduled" />
        </div>
      </div>
    </div>
  );
};
