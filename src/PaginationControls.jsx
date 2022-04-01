import React from "react";
import { useRouter } from "next/router";

import styles from "../styles/PaginationControls.module.css";

const PaginationControls = ({ totalItems, pageSize, pageNum, urlBase }) => {
  const router = useRouter();
  const totalPages = Math.floor(totalItems / pageSize);
  const hasPreviousPage = !(pageNum > 1);
  const hasNextPage = !(pageNum < totalPages);

  return (
    <div className={styles.paginationBar}>
      <button
        disabled={hasPreviousPage}
        className={styles.previous}
        onClick={() => {
          router.push(`${urlBase}?pageNum=${pageNum - 1}`);
        }}
      >
        Previous
      </button>
      <div className={styles.pageNum}>Page {pageNum}</div>
      <button
        disabled={hasNextPage}
        className={styles.next}
        onClick={() => {
          router.push(`${urlBase}?pageNum=${pageNum + 1}`);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
