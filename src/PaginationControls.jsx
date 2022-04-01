import React from "react";
import { useRouter } from "next/router";

import styles from "../styles/PaginationControls.module.css";
import Button from "./Button";

const PaginationControls = ({ totalItems, pageSize, pageNum, urlBase }) => {
  const router = useRouter();
  const totalPages = Math.floor(totalItems / pageSize);
  const hasPreviousPage = pageNum > 1;
  const hasNextPage = pageNum < totalPages;

  return (
    <div className={styles.paginationBar}>
      <Button
        enabled={hasPreviousPage}
        color="secondary"
        text="Previous"
        type="button"
        onClick={() => {
          router.push(`${urlBase}?pageNum=${parseInt(pageNum, 10) - 1}`);
        }}
      />
      <div className={styles.pageNum}>Page {pageNum}</div>
      <Button
        enabled={hasNextPage}
        color="secondary"
        text="Next"
        type="button"
        onClick={() => {
          router.push(`${urlBase}?pageNum=${parseInt(pageNum, 10) + 1}`);
        }}
      />
    </div>
  );
};

export default PaginationControls;
