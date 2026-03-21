import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "~/lib/utils";
import { IoMdAdd } from "react-icons/io";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const NUM_OF_QA = 8;

const QAElement = ({ index }: { index: number }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <div
            className="w-full p-10 rounded-4xl shadow-muted-foreground/20 shadow-md hover:shadow-lg hover:scale-[1.01] bg-secondary flex flex-col"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div
                className={cn(
                    "flex flew-row justify-between transition-[margin-bottom] duration-500",
                    isOpen ? "mb-12" : "mb-0",
                )}
            >
                <h6>{t(`qa.${index}.title`)}</h6>
                <IoMdAdd
                    size={36}
                    className={cn(
                        "themed-text transition-all duration-300 min-w-9 min-h-9",
                        isOpen ? "rotate-45" : "rotate-0",
                    )}
                />
            </div>
            <div
                className={cn(
                    "grid transition-[grid-template-rows] duration-500",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
            >
                <div className="overflow-hidden">
                    <Markdown remarkPlugins={[remarkGfm]}>
                        {t(`qa.${index}.answer`)}
                    </Markdown>
                </div>
            </div>
        </div>
    );
};

const QA = () => {
    const { t } = useTranslation();
    const elements = useMemo(() => {
        const res = [];

        for (let i = 0; i < NUM_OF_QA; i++) {
            res.push(<QAElement index={i} />);
        }

        return res;
    }, []);

    return (
        <div className="flex flex-col items-center gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h3>
                Q<span className="themed-text">A</span>
            </h3>
            <p className="mb-16">{t("qa.label")}</p>
            {elements}
        </div>
    );
};

export default QA;
