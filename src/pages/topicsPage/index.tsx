'use client';
import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import Container from '@/shared-components/Container';
import Image from 'next/image';

const index = () => {
  const [selectedTopic, setSelectedTopic] = useState('all');
  const renderTab = (selected: string) => {
    return (
      <div className="inline-flex items-center justify-center mr-4">
        {selected === selectedTopic ? (
          <div className="w-[7px] h-[7px] rounded-full bg-[#00A1E9]" />
        ) : (
          <div className="w-[7px] h-[7px] rounded-full bg-[#E5E5E5]" />
        )}
        <p className={`cursor-pointer px-2`}>{selected.toUpperCase()}</p>
      </div>
    );
  };
  const renderContentTab = () => {
    switch (selectedTopic) {
      case 'all':
        return (
          <div className="relative overflow-x-auto sm:rounded-lg w-[70%] m-auto mb-4">
            <table className="w-full text-sm text-left rtl:text-right">
              <tbody>
                <tr className="border-t border-black">
                  <th scope="row" className="pr-6 py-8 font-medium">
                    <p className="text-sm font-normal leading-5">2025.01.01</p>
                  </th>
                  <td className="px-6 py-8">
                    <p className="text-xs font-normal border-1 rounded-3xl border-[#00A1E9] py-1 px-6 text-center leading-5">
                      News
                    </p>
                  </td>
                  <td className="px-6 py-8">
                    <p className="text-base font-normal leading-5">
                      こちらにタイトルが入ります。お読みにならないでください。こちらに...
                    </p>
                  </td>
                  <td className="px-6 py-8">
                    <Image
                      src="/images/creative/arrow-right.svg"
                      alt="arraw-right"
                      width={23}
                      height={23}
                    />
                  </td>
                </tr>
                <tr className="border-t border-black">
                  <th scope="row" className="pr-6 py-8 font-medium">
                    <p className="text-sm font-normal leading-5">2025.01.01</p>
                  </th>
                  <td className="px-6 py-8">
                    <p className="text-xs font-normal border-1 rounded-3xl border-[#00A1E9] py-1 px-6 text-center leading-5">
                      EVENT
                    </p>
                  </td>
                  <td className="px-6 py-8">
                    <p className="text-base font-normal leading-5">
                      こちらにタイトルが入ります。お読みにならないでください。こちらに...
                    </p>
                  </td>
                  <td className="px-6 py-8">
                    <Image
                      src="/images/creative/arrow-right.svg"
                      alt="arraw-right"
                      width={23}
                      height={23}
                    />
                  </td>
                </tr>
                <tr className="border-t border-black">
                  <th scope="row" className="pr-6 py-8 font-medium">
                    <p className="text-sm font-normal leading-5">2025.01.01</p>
                  </th>
                  <td className="px-6 py-8">
                    <p className="text-xs font-normal border-1 rounded-3xl border-[#00A1E9] py-1 px-6 text-center leading-5">
                      News
                    </p>
                  </td>
                  <td className="px-6 py-8">
                    <p className="text-base font-normal leading-5">
                      こちらにタイトルが入ります。お読みにならないでください。こちらに...
                    </p>
                  </td>
                  <td className="px-6 py-8">
                    <Image
                      src="/images/creative/arrow-right.svg"
                      alt="arraw-right"
                      width={23}
                      height={23}
                    />
                  </td>
                </tr>
                <tr className="border-t border-black">
                  <th scope="row" className="pr-6 py-8 font-medium">
                    <p className="text-sm font-normal leading-5">2025.01.01</p>
                  </th>
                  <td className="px-6 py-8">
                    <p className="text-xs font-normal border-1 rounded-3xl border-[#00A1E9] py-1 px-6 text-center leading-5">
                      COLUMN
                    </p>
                  </td>
                  <td className="px-6 py-8">
                    <p className="text-base font-normal leading-5">
                      こちらにタイトルが入ります。お読みにならないでください。こちらに...
                    </p>
                  </td>
                  <td className="px-6 py-8">
                    <Image
                      src="/images/creative/arrow-right.svg"
                      alt="arraw-right"
                      width={23}
                      height={23}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    }
  };
  return (
    <section className="relative w-full">
      <div className="w-full flex justify-between bg-[#F5F5F5] pt-14 pl-24 pr-14 lg:h-[300px]">
        <div className="relative">
          <h1 className="text-[40px] font-medium leading-10 mb-2">TOPICS</h1>
          <p className="text-base font-medium leading-6">トピックス</p>
        </div>
        <div className="relative">
          <span className="text-[12px] font-normal leading-5 text-[#ADADAD]">
            TOP - <span className="text-[#000000]">TOPICS</span>
          </span>
        </div>
      </div>
      <div className="w-[70%] m-auto my-14">
        <ul className="flex -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="me-2" onClick={() => setSelectedTopic('all')}>
            {renderTab('all')}
          </li>
          <li className="me-2" onClick={() => setSelectedTopic('news')}>
            {renderTab('news')}
          </li>
          <li className="me-2" onClick={() => setSelectedTopic('media')}>
            {renderTab('media')}
          </li>
          <li className="me-2" onClick={() => setSelectedTopic('event')}>
            {renderTab('event')}
          </li>
          <li className="me-2" onClick={() => setSelectedTopic('column')}>
            {renderTab('column')}
          </li>
        </ul>
      </div>
      {renderContentTab()}
    </section>
  );
};

export default index;
