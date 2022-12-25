import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';

type propsObject = {
  gameMode: string | null | any,
  setGameMode: Function,
};

export default function MyToggle(props: any) {
  // FIXME: Generalize this to work with any toggle
  const [enabled, setEnabled] = useState(props.gameMode === 'chem');

  useEffect(() => {
    props.setGameMode(enabled ? 'chem' : 'minesweeper');
  }, [enabled]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-blue-600' : 'bg-gray-400'} relative inline-flex h-6 w-11 items-center rounded-full`}>
      <span className="sr-only">Toggle</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
}
