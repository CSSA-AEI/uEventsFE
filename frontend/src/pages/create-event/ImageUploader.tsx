import { useState, useEffect, ChangeEvent } from "react";
import './ImageUploader.css';

export interface ImageUploaderProps {
  /** Called when the user selects an image (or clears it). */
  onSelect: (file: File | null) => void;
  /** Optional label text. */
  label?: string;
}

export default function ImageUploader({ onSelect, label }: ImageUploaderProps) {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    
    useEffect(() => {
        if (!file) {
        setPreviewUrl(null);
        return;
        }
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        return () => URL.revokeObjectURL(url);
    }, [file]);

  /* handlers */
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0] ?? null;
        setFile(f);
        onSelect(f);
    };

    const clear = () => {
        setFile(null);
        onSelect(null);
    };

  /* crude inline styles — replace or refine as desired */
    const styles = {
        fileInput: {
        padding: "0.4rem 0.8rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        cursor: "pointer",
        },
        previewWrapper: { position: "relative", width: "160px" },
        previewImg: {
        width: "100%",
        height: "auto",
        borderRadius: "6px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
        },
        clearBtn: {
        position: "absolute",
        top: "-8px",
        right: "-8px",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        background: "#c0392b",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontSize: "14px",
        lineHeight: "20px",
        },
    } as const;

    return (
        <div style={styles.wrapper} className="image-upload-container">
            {previewUrl && (
                <div style={styles.previewWrapper}>
                    <img src={previewUrl} alt="Preview" style={styles.previewImg} />
                    <button onClick={clear} style={styles.clearBtn}>
                        ×
                    </button>
                </div>
            )}
            <input
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="image-upload-input"
            />
        </div>
    );
}
