import React, { useState } from "react";
import * as styles from "@pages/home/components/multiColumnPopup/MultiColumnPopup.css";

interface Column {
  header: string;
  options: string[];
}

interface Props {
  columns: Column[];
  selected: string[];
  setSelected: (values: string[]) => void;
  onClose: () => void;
}

const MultiColumnPopup = ({
  columns,
  selected,
  setSelected,
  onClose,
}: Props) => {
  const [tempSelected, setTempSelected] = useState<string[]>([...selected]);

  const toggleValue = (value: string) => {
    setTempSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const toggleAll = () => {
    const all = columns.flatMap((c) => c.options);
    setTempSelected(tempSelected.length === all.length ? [] : all);
  };

  const handleConfirm = () => {
    setSelected(tempSelected);
    onClose();
  };

  // columns를 3개씩 끊어 2차원 배열로 변환
  const chunkedColumns: Column[][] = [];
  for (let i = 0; i < columns.length; i += 3) {
    chunkedColumns.push(columns.slice(i, i + 3));
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <span className={styles.title}>코드검색 결과</span>
          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>
        <div className={styles.submitHeader}>
          <label className={styles.allCheck}>
            <input
              type="checkbox"
              checked={
                tempSelected.length === columns.flatMap((c) => c.options).length
              }
              onChange={toggleAll}
            />
            전체 선택
          </label>
          <button className={styles.confirmBtn} onClick={handleConfirm}>
            확인
          </button>
        </div>

        {chunkedColumns.map((columnGroup, groupIdx) => {
          const maxRows = Math.max(...columnGroup.map((c) => c.options.length));
          return (
            <table key={groupIdx} className={styles.table}>
              <thead>
                <tr>
                  {columnGroup.map((col) => (
                    <React.Fragment key={col.header}>
                      <th className={`${styles.th} ${styles.selectTh}`}>
                        선택
                      </th>
                      <th className={styles.th}>{col.header}</th>
                    </React.Fragment>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: maxRows }).map((_, rowIdx) => (
                  <tr key={rowIdx}>
                    {columnGroup.map((col) => {
                      const item = col.options[rowIdx];
                      return item ? (
                        <React.Fragment key={`${col.header}-${item}`}>
                          <td className={`${styles.td} ${styles.tdCheckbox}`}>
                            <input
                              type="checkbox"
                              className={styles.checkbox}
                              checked={tempSelected.includes(item)}
                              onChange={() => toggleValue(item)}
                            />
                          </td>
                          <td className={styles.td}>{item}</td>
                        </React.Fragment>
                      ) : (
                        // 비어 있는 열: 선택 + 값 2칸 차지
                        <>
                          <td
                            className={`${styles.td} ${styles.tdCheckbox}`}
                          ></td>
                          <td className={styles.td}></td>
                        </>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          );
        })}

        <div className={styles.footer}>
          <button className={styles.confirmBtn} onClick={handleConfirm}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiColumnPopup;
