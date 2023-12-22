"use client";
import { API } from "@/API";
import Tables from "@/components/Tables";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [id, setId] = useState("");
  const [imageMap, setImageMap] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await API.GetListingsBooks();
      console.log("spotlight", res.data);
      setImageMap(res?.data?.data);
    };

    fetchData();
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await API.DeleteListingsBooks(id);
      // console.log(resp.data, "id");
      //  setImageMaps(res?.data?.data)
    };
    fetchData();
  }, [id]);

  // console.log(imageMap);
  return (
    <div className=" px-3 ">
      <section>
        <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              BOOK LISTINGS
            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>
          <div className="py-10 px-10">
            <a
              href="/dashboard/listing/book-listing/create"
              class="my-10 min-w-[100px] text-lg text-center inline-block rounded bg-indigo-600 px-3 py-2 font-medium text-white hover:bg-indigo-700"
            >
              Create
            </a>
          </div>
          {/* <Tables imageMap={imageMap} setId={setId} id={id} /> */}
          <div className="rounded-lg border border-gray-200">
            <div className="rounded-t-lg">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                  <tr>
                    <th className="whitespace-nowrap w-10 px-4 py-2 font-medium text-gray-900">
                      Id
                    </th>

                    <th className="whitespace-nowrap max-w-[500px] min-w-[350px] px-4 py-2 font-medium text-gray-900 text-left">
                      Description
                    </th>

                    {imageMap.map((g) => g.image)[0] && (
                      <th className="whitespace-nowrap w-full min-w-[200px] px-4 py-2 font-medium text-gray-900">
                        Image
                      </th>
                    )}

                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
                  </tr>
                </thead>

                <tbody className="min-w-full divide-y-2 divide-gray-200">
                  {imageMap.map((gallery, i) => {
                    return (
                      <tr key={i}>
                        <td className="whitespace-nowrap w-10 px-4 py-2 text-gray-700">
                          {gallery.id}
                        </td>

                        <td className="whitespace-nowrap max-w-[500px] w-full min-w-[350px] px-4 py-2 text-gray-700">
                          {gallery.description}
                        </td>

                        {gallery.image && (
                          <td className="whitespace-nowrap min-w-[200px] w-full px-4 py-2 font-medium text-gray-900">
                            <Image
                              src={gallery.image}
                              alt="ad"
                              width={200}
                              height={200}
                              className="h-[80px] object-cover transition duration-500 group-hover:scale-105 sm:h-[80px]"
                            />
                          </td>
                        )}
                        <td class="whitespace-nowrap px-4 py-2">
                          <a
                            href={`/dashboard/galleries/updategallery?update=${gallery.id}`}
                            class="my-10 min-w-[100px] text-lg text-center inline-block rounded bg-indigo-600 px-3 py-2 font-medium text-white hover:bg-indigo-700"
                          >
                            Update
                          </a>

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
        </div>
      </section>
    </div>
  );
};

export default Page;
