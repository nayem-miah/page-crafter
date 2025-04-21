import { PanelBody } from "@wordpress/components";
import ActionBtn from "../generalTabComp/ActionBtn";
import Content from "../generalTabComp/Content";
import Image from "../generalTabComp/Image";
import General from "../generalTabComp/General";

export default function GeneralTab({ attributes, setAttributes }) {

    const {
        numberOfPosts,
        displayImage,
        readMore,
        showTitle,
        showExcerpt,
        showMeta,
        excerptMaxWords,
        readMoreAlignment,
        columns,
        columnGap,
        contentAlignment,
    } = attributes;
    return (
        <div>
            <General
                order={attributes?.order}
                setAttributes={setAttributes}
                columnGap={columnGap}
                columns={columns}
                numberOfPosts={numberOfPosts}
            />
            <Image
                setAttributes={setAttributes}
                displayImage={displayImage}
            />
            <Content
                setAttributes={setAttributes}
                showExcerpt={showExcerpt}
                showTitle={showTitle}
                showMeta={showMeta}
                excerptMaxWords={excerptMaxWords}
                contentAlignment={
                    contentAlignment
                }
            />
            <ActionBtn
                setAttributes={setAttributes}
                readMore={readMore}
                readMoreAlignment={
                    readMoreAlignment
                }
            />
            <PanelBody
                title="Pagination"
                initialOpen={false}
            >
                <p>General settings content here</p>
            </PanelBody>
        </div>
    )
}
