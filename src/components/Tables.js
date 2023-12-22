"use client";
import { API } from "@/API";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Tables = ({ imageMap, setId, id }) => {
  const router = usePathname();

  console.log(router);
  return (
    <>
      <div className="rounded-lg border border-gray-200">
        <div className="rounded-t-lg">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                {imageMap.map((g) => g.image)[0] && (
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Image
                  </th>
                )}
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Id
                </th>
                {imageMap.map((g) => g.name)[0] ? (
                  <>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Name
                    </th>
                  </>
                ) : (
                  <>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Title
                    </th>
                  </>
                )}

                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
              </tr>
            </thead>

            <tbody className="min-w-full divide-y-2 divide-gray-200">
              {imageMap.map((gallery, i) => {
                return (
                  <tr key={i}>
                    {gallery.image && (
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        <Image
                          src={gallery.image}
                          alt="ad"
                          width={300}
                          height={300}
                          className="h-[80px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[80px]"
                        />
                      </td>
                    )}
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {gallery.id}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {gallery.name || gallery.title}
                    </td>

                    <td class="whitespace-nowrap px-4 py-2">
                      {router === "/dashboard/galleries" ? (
                        //  <a
                        //  href="/dashboard/galleries/creategallery"
                        //  class="inline-block rounded bg-indigo-600 px-3 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                        //  >
                        //   Update
                        // </a>
                        ""
                      ) : router === "/dashboard/events" ? (
                        <a
                          href={`/dashboard/events/update-events?update=${gallery.id}`}
                          class="inline-block rounded bg-indigo-600 px-3 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                        >
                          Update
                        </a>
                      ) : (
                        <a
                          href={`/dashboard/galleries/updategallery?update=${gallery.id}`}
                          class="inline-block rounded bg-indigo-600 px-3 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                        >
                          Update
                        </a>
                      )}

                      <a
                        href="#"
                        onClick={() => setId(gallery.id)}
                        class="inline-block rounded bg-indigo-600 px-3 ml-2 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
          <ol className="flex justify-end gap-1 text-xs font-medium">
            <li>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                1
              </a>
            </li>

            <li className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
              2
            </li>

            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                4
              </a>
            </li>

            <li>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Tables;
