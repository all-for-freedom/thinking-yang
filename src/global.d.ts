declare global {
	interface HTMLElementTagNameMap {
		"table-of-contents": HTMLElement & {
			init?: () => void;
		};
	}

	interface Window {
		// Define swup type directly since @swup/astro doesn't export AstroIntegration
		swup?: {
			hooks: {
				on: (event: string, handler: (...args: unknown[]) => void) => void;
				off: (event: string, handler: (...args: unknown[]) => void) => void;
			};
		};
		pagefind?: {
			search: (query: string) => Promise<{
				results: Array<{
					data: () => Promise<SearchResult>;
				}>;
			}>;
		};

		mobileTOCInit?: () => void;
		closeAnnouncement?: () => void;
		iconifyLoaded?: boolean;
		initSemifullScrollDetection?: () => void;
		__iconifyLoader?: {
			load: () => Promise<void>;
		};
	}

	interface Document {
		startViewTransition?: (
			callback?: () => void | Promise<void>,
		) => ViewTransition;
	}

	interface ViewTransition {
		finished: Promise<void>;
		ready: Promise<void>;
		updateCallbackDone: Promise<void>;
		skipTransition: () => void;
	}
}

interface SearchResult {
	url: string;
	meta: {
		title: string;
	};
	excerpt: string;
	content?: string;
	word_count?: number;
	filters?: Record<string, unknown>;
	anchors?: Array<{
		element: string;
		id: string;
		text: string;
		location: number;
	}>;
	weighted_locations?: Array<{
		weight: number;
		balanced_score: number;
		location: number;
	}>;
	locations?: number[];
	raw_content?: string;
	raw_url?: string;
	sub_results?: SearchResult[];
}

export {};
