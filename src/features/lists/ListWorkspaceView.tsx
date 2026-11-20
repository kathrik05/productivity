import React, { useState } from 'react';
import {
  AddButton,
  ProgressBar,
  TaskTile,
  TextInput,
} from '@/components/ui';
import type { TaskListRecord } from '@/lib/db';
import {
  calculateListProgress,
  createTask,
  toggleTaskChecked,
  useListTasks,
} from '@/features/tasks/useTasks';
import infoIconSvg from '@/assets/icons/info.svg';

export interface ListWorkspaceViewProps {
  list: TaskListRecord;
}

/**
 * Screen 3: List workspace view after list creation (Figma node 93:8339)
 * Features:
 * - List Name header + static 15x15 info icon (93:8347)
 * - Functional 20-segment ProgressBar (93:8033)
 * - Add task input row (94:8619) with light TextInput (94:8620) and 30x30 dark AddButton (94:8899)
 * - Dynamic TaskTile list below that updates progress when tasks are checked/unchecked
 */
export const ListWorkspaceView: React.FC<ListWorkspaceViewProps> = ({
  list,
}) => {
  const tasks = useListTasks(list.id) ?? [];
  const [taskTitle, setTaskTitle] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const { percentage, filledSegments, deltaText } =
    calculateListProgress(tasks);

  const handleAddTask = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (isAdding) return;

    const trimmed = taskTitle.trim();
    if (!trimmed) {
      setHasError(true);
      return;
    }

    try {
      setIsAdding(true);
      await createTask({
        listId: list.id,
        title: trimmed,
      });
      setTaskTitle('');
      setHasError(false);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div
      className="flex flex-col gap-5 items-center px-3 py-6 w-full"
      data-node-id="93:8346"
    >
      {/* Header: List Name + static 15x15 info icon (93:8347) */}
      <div
        className="flex gap-2 items-center relative shrink-0 w-full max-w-87.5"
        data-node-id="93:8347"
        data-name="Header"
      >
        <h2
          className="font-sans text-title font-bold leading-[normal] text-secondary truncate"
          data-node-id="93:8348"
        >
          {list.name}
        </h2>
        <div
          className="relative shrink-0 size-[15px]"
          data-node-id="93:8349"
          aria-hidden="true"
        >
          <img
            alt=""
            className="block max-w-none size-full"
            src={infoIconSvg}
          />
        </div>
      </div>

      {/* Functional Progress Bar (93:8033) */}
      <ProgressBar
        variant="Default"
        percentage={percentage}
        filledSegments={filledSegments}
        deltaText={deltaText}
        className="shrink-0"
      />

      {/* Add Task Row (94:8619) */}
      <form
        onSubmit={handleAddTask}
        className="flex gap-1 items-center relative shrink-0 w-full max-w-87.5"
        data-node-id="94:8619"
        data-name="Add task"
      >
        <TextInput
          theme="light"
          placeholder="add a task"
          value={taskTitle}
          hasError={hasError}
          onChange={(e) => {
            setTaskTitle(e.target.value);
            if (hasError && e.target.value.trim().length > 0) {
              setHasError(false);
            }
          }}
          aria-label="Add a task"
          containerClassName="flex-1 min-w-px w-auto h-[44.419px] px-1 py-3"
        />
        <AddButton
          type="submit"
          size="sm"
          variant="dark"
          disabled={isAdding}
          aria-label="Add task"
          data-node-id="94:8899"
        />
      </form>

      {/* Created Tasks List */}
      {tasks.length > 0 && (
        <div
          className="flex flex-col items-center w-full max-w-87.5"
          data-name="Tasklist"
        >
          {tasks.map((task) => (
            <TaskTile
              key={task.id}
              title={task.title}
              checked={task.checked}
              priority={task.priority}
              onToggleCheck={(nextChecked) =>
                toggleTaskChecked(task.id, nextChecked)
              }
              className="w-full"
            />
          ))}
        </div>
      )}
    </div>
  );
};
