import React from 'react';

const AppLoading = () => {
    return (
        <div className="my-[80px] container mx-auto">
      {/* Heading Skeleton */}
      <div className="space-y-4 max-w-[400px] mx-auto text-center">
        <div className="skeleton h-8 w-48 mx-auto" />
        <div className="skeleton h-4 w-72 mx-auto" />
      </div>

      {/* Cards Skeleton */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="card border border-base-300 bg-base-100 shadow-sm"
          >
            <div className="card-body p-4">
              <div className="flex items-center gap-4">
                {/* Image */}
                <div className="skeleton h-[90px] w-[90px] shrink-0 rounded-2xl" />

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="skeleton h-5 w-3/4" />

                  <div className="skeleton mt-2 h-4 w-1/2" />

                  <div className="mt-3 flex items-center gap-2">
                    <div className="skeleton h-4 w-14" />
                    <div className="skeleton h-4 w-2" />
                    <div className="skeleton h-4 w-12" />
                  </div>

                  <div className="mt-3 space-y-2">
                    <div className="skeleton h-3 w-full" />
                    <div className="skeleton h-3 w-3/4" />
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="mt-4">
                <div className="skeleton h-8 w-20 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default AppLoading;