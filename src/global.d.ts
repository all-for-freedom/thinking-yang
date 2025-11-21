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
			preload?: (url: string) => void;
			navigate?: (url: string, options?: { history?: boolean }) => void;
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
		panelManager?: {
			togglePanel: (id: string, forceState?: boolean) => Promise<boolean>;
			closePanel: (id: string) => Promise<void>;
			closeAllPanelsExcept: (exceptPanelId?: string) => Promise<void>;
		};
		siteConfig?: {
			toc?: {
				useJapaneseBadge?: boolean;
				depth?: number;
			};
		};
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
