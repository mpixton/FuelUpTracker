import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/PaginationControls.module.css";
import { useAppContext } from "../utils/AppContext";
import Button from "./Button";

const PaginationControls = ({ totalItems, pageSize }) => {
  const router = useRouter();
  const { pageNum, setPageNum } = useAppContext();

  const totalPages = Math.ceil(totalItems / pageSize);
  const hasPreviousPage = pageNum > 1;
  const hasNextPage = pageNum < totalPages;

  return (
    <div className={styles.paginationBar}>
      <Button
        enabled={pageNum !== 1}
        text="First Page"
        color="secondary"
        onClick={() => setPageNum(1)}
      />
      <Button
        enabled={hasPreviousPage}
        color="secondary"
        text="Previous"
        onClick={() => {
          setPageNum(pageNum - 1);
        }}
      />
      <div className={styles.pageNum}>Page {pageNum}</div>
      <Button
        enabled={hasNextPage}
        color="secondary"
        text="Next"
        onClick={() => {
          setPageNum(pageNum + 1);
        }}
      />
      <Button
        enabled={pageNum !== totalItems}
        text="Last Page"
        color="secondary"
        onClick={() => setPageNum(totalPages)}
      />
    </div>
  );
};

export default PaginationControls;
