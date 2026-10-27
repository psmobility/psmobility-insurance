PSMOBILITY 모바일 조회 전용 PWA v2.7

변경: distinct hash history로 고객 상세→목록 뒤로가기 및 목록 종료 확인 안정화.
Android PWA는 JavaScript로 완전한 앱 강제종료를 보장하지 않습니다. 창 닫기가 거부되면 고객 목록으로 복귀하고 홈 버튼 안내가 표시됩니다.
GitHub 저장소 루트에 index.html, sw.js, manifest.json, icons/ 내용을 업로드합니다.
고객정보는 서비스워커 캐시에 저장하지 않습니다.
